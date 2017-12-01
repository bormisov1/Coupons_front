import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { HttpService } from './http.service';
import { baseURL, wsBaseURL } from '../shared/baseurl'

import { Message } from '../shared/message';
import { Bot } from '../shared/bot';
import { CurrentUser } from '../shared/current-user';
import { MessageOutSocket } from '../shared/sockets';

import { LocalStorageService } from './local-storage.service';
import { WebsocketService } from './websocket.service';

@Injectable()
export class ChatService {
	public sockets: Subject<{}>;

	constructor(
		private localStorageService: LocalStorageService
		, private httpService: HttpService
		, private wsService: WebsocketService
	) {
		this.sockets = <Subject<Message>>wsService
			.connect(wsBaseURL + '/bots')
			.map((response: MessageEvent): Message => {
				return JSON.parse(response.data);
			});
	}

	getMsgsAndMaxSerialNum(botId: number): [Message[], number] {
		let msgs = this.localStorageService.get<Message[]>('messages') || [];
		let maxMsgSerialNum = msgs.reduce((prevVal, curVal) => {
			return (curVal.serialNum > prevVal.serialNum)?curVal:prevVal;
		}, { serialNum: 0 }).serialNum;
		return [msgs, maxMsgSerialNum];
	}

	getMessages(botId: number): Message[] {
		let [msgs, maxMsgSerialNum] = this.getMsgsAndMaxSerialNum(botId);
		let currentUser = this.localStorageService.get<CurrentUser>('currentUser');
		this.sockets.next({
			token: currentUser.token
			, username: currentUser.username
			, action: 'get'
			, botId: botId
			, maxSerialNumKnown: maxMsgSerialNum
		});
		return msgs;
	}

	sendMessage(bot: Bot, messageText: string): MessageOutSocket {
		let currentUser = this.localStorageService.get<CurrentUser>('currentUser');
		let [msgs, maxMsgSerialNum] = this.getMsgsAndMaxSerialNum(bot.id);
		let message: MessageOutSocket = new MessageOutSocket(Object.assign({
			action: 'chat'
			, botId: bot.id
			, text: messageText
			, temporarySerialNum: maxMsgSerialNum + 1
		}, currentUser));
		this.localStorageService.pushElToArrayField<MessageOutSocket>('uncorfimed-messages', message);
		this.sockets.next(message);
		return message;
	}

	recordMessage(msg: Message): void {
		this.localStorageService.pushElToArrayField('messages', msg);
	}

	reSetMessages(msgs: Message[]): void {
		this.localStorageService.set('messages', msgs);
	}
}
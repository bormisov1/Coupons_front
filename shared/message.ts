import { MessageOutSocket, MessageInSocket } from './sockets';

export class Message {
	serialNum: number;
	text: string;
	botId: number;
	isOutgoing: boolean;

	constructor (messageInSocket: MessageInSocket);
	constructor (messageOutSocket: MessageOutSocket, serialNum: number);
	constructor (messageOutSocket: MessageOutSocket, serialNum: number);
	constructor (messageSocket: MessageOutSocket | MessageInSocket, serialNum?: number) {
		let isOutgoingMsg: boolean = messageSocket instanceof MessageOutSocket;
		this.serialNum = isOutgoingMsg?serialNum:(<MessageInSocket>messageSocket).serialNum;
		this.text = messageSocket.text || messageSocket && messageSocket.text;
		this.botId = messageSocket.botId || messageSocket && messageSocket.botId;
		this.isOutgoing = isOutgoingMsg;
	}
};
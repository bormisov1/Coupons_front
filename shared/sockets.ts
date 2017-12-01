import { Message } from './message';
import { ChatButton, ChatSelect } from './chat';

export class InSocket {
	action: string;
	
	constructor(_: MessageSocket) {
		Object.assign(this, _);
	}
};

export class BotInfoSocket extends InSocket {
	id: number;
	name: string;
	description: string;
	message: Message;
	messages: Message[];
}

class MessageSocket extends InSocket {
	username: string;
	botId: number
	text: string;
 
	constructor(_: MessageSocket) {
		super(_);
		Object.assign(this, _);
	} 
}

export class MessageInSocket extends MessageSocket {
	serialNum: number;
	buttons?: ChatButton[];
	selects?: ChatSelect[];
	isQuestion?: boolean;
}

export class MessageOutSocket extends MessageSocket {
	token: string;
	temporarySerialNum: number;
}

export class DenySocket extends InSocket {
	message: string;
}

export class ConfirmSocket extends InSocket {
	botId: number;
	serialNum: number;
	temporarySerialNum: number;
}
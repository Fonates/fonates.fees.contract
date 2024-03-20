import "@stdlib/deploy";
message Donate {
    to: Address;
    text: String;
    value: Int;
}

contract FonatesFeesContract with Deployable {
    init(){}

    receive(){}

    receive(msg: Donate){
        send(SendParameters{
                to: msg.to,
                value: msg.value,
                mode: SendIgnoreErrors,
                bounce: false,
                body: msg.text.asComment()
            }
        );
    }
}


//sernder addr = 0QA1-5mTt6d6WhfGAY8grgohQk7TWXrKO3SHyze1z1I-kdY7
//reciver addr = 0QCcmnblmTDfLFlCvlcFbhkELH2MoLJ4m3j7iIyCLrhm1xhS

//tonhub testnet wallet = kQD2Dp05JEkWgJMo0C9GmoySFF5Vk3RAD-2U7ymkB_kUS9Js
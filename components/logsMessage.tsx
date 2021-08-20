import React from 'react';
import {Label, Box, BasePropertyProps} from '@admin-bro/design-system';
// import { Label, Box, DropZone } from '@admin-bro/design-system'

const Show: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props;

    const log_type = record.params['log_type'];
    const coin = record.params['coin'];
    var message = record.params['message'];
    // if (log_type == "coin") {
    //     var message = record.params['message'];
    //     message= message.replaceAll("\"", "")
    //     message = message.replace("<coin>", '<a href="/login">login user</a>' )
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(message, 'text/html');
    //     window.doc = doc;
    //     message = doc.body.innerHTML;
    // }else {
    //     var message = record.params['message'];
    // }
    console.log(log_type)

    return (
        <Box>
            {message} {"  "} 
            {log_type == "coin" ? 
            (
                (coin != null ? 
                <a href={`coin/records/${coin}/show`} target="_blank"> ( See Coin )</a> : <span /> )
            ): (
                <span></span>
            )}
        </Box>
        // <Box>
        //     <input type="file" />
        // </Box>
    )
}

export default Show; 
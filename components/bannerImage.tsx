import React from 'react';
import {Label, Box, DropZone, DropZoneItem, BasePropertyProps, DropZoneProps} from '@admin-bro/design-system';
// import { Label, Box, DropZone } from '@admin-bro/design-system'

const Edit: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props;

    const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
        onChange(property.name, files[0])
        // console.log(record.params.image)
    }


    // const uploadPhoto = record.params.image;
    // const photoToUpload = record.params[property.name];

    return (
        <Box marginBottom={"xxl"}>
            <Label>*{property.label}</Label>
            <DropZone onChange={handleDropZoneChange} validate={{
                mimeTypes: ["image/jpeg","image/png", "image/gif", "image/jpg"],
                maxSize: 2097152
            }} />
            {/* {uploadPhoto && !photoToUpload && (
                <>
                <DropZoneItem src={uploadPhoto} />
                <h1>Hello world</h1>
                </>
            )} */}
        </Box>
    )
}

export default Edit;
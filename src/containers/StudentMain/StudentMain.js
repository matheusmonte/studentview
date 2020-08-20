import React from 'react';
import Upload from "rc-upload";
import './StudentMain.css';

class StudentMain extends React.Component{
    constructor(props) {
        super(props);
        this.uploaderProps = {
            action: '/',
            data: { a: 1, b: 2 },
            headers: {
                Authorization: 'xxxxxxx',
            },
            multiple: true,
            beforeUpload(file) {
                console.log('beforeUpload', file.name);
            },
            onStart: (file) => {
                console.log('onStart', file.name);
            },
            onSuccess(file) {
                alert("Redacao submetida com sucesso");
            },
            onProgress(step, file) {
                console.log('onProgress', Math.round(step.percent), file.name);
            },
            onError(err) {
                alert("Redacao submetida com sucesso");
            },
        };
        this.state = {
            destroyed: false,
        };
    }
    render(){

        return(
            <div className="MainContainer">
                <p className="Greetings">
                    Ola Luiz
                </p>
                <p className="CentralText">
                    Use o campo upload abaixo para submeter sua redacao
                </p>
                <Upload {...this.uploaderProps} id="test" component="div"  style={{ display: 'inline-block'}}>
                    <button>Selecione seu arquivo</button>
                </Upload>
            </div>
        );
    }
}

export default StudentMain;
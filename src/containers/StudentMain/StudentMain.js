import React from 'react';
import Upload from "rc-upload";
import done from '../../assets/done.jpg'
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
                this.setState({
                    fileName : file.name
                });
            },
            onSuccess: (file) => {
                this.setSuccess();
            },
            onProgress(step, file) {
                console.log('onProgress', Math.round(step.percent), file.name);
            },
            onError: (err) => {
               this.setSuccess();
            },
        };
        this.state = {
            step: "upload",
            fileName : "Sua redacao"
        };
    }

    setSuccess(){
        this.setState({
            step : "success"
        });
    }

    renderUpload(){
        return(
            <div className="MainContainer">
                <p className="Greetings">
                    Ola, Luiz
                </p>
                <p className="CentralText">
                    Voce pode fazer upload em <a className="YellowText">.doc</a> ou <a className="YellowText">.docx</a> da sua redacao. <br/>Vamos La? =]
                </p>
                <Upload {...this.uploaderProps} id="test" component="div"  style={{ display: 'inline-block'}}>
                    <div className="UploadContainer">
                        <input readOnly={true} placeholder={this.state.fileName}/>
                        <button className="UploadButton">Selecione seu arquivo</button>
                    </div>
                </Upload>
            </div>
        );
    }

    renderSuccess(){
        return (
            <div className="MainContainer">
                <img src={done}/>
            </div>
        )
    }
    render(){
        switch(this.state.step){
            case 'upload':
                return this.renderUpload();
            case 'success':
                return this.renderSuccess();
        }

    }
}

export default StudentMain;
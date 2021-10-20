import Name from '@salesforce/schema/Account.Name';
import { LightningElement } from 'lwc';
const recordMetadata={
    name:'name',
    status:'status',
    sensorsBaseStation:'Base Station__c',
    sensorModel:'model'

}
const columns = [
    { label: 'Sensors name', fieldName: 'SensorsName', type: 'text' },
    { label: 'Sensors model', fieldName: 'SensorsModel', type: 'text' },
    { label: 'Base Station', fieldName: 'BaseStation', type: 'Base Station__r:Name' },
    { label: 'Status', fieldName: 'Status', type: 'picklist' },
];

const data = [
    {
        id: 1,
        SensorsName: 'Sensor1 feel you here',
        SensorsModel: 'Best model ever53284hbchs',
        BaseStation:'First Station Check Point',
        Status:'Active',
    },
];

export default class UploadingData extends LightningElement {
    clickedButtonLabel;
    columns=columns;
    data=data;
    ShowTable(){
        columns=columns;        
    }
    HandleData(event){
      
        // if(event.target.file.length > 0){
        //     alert("Loading!");
        //     const file=event.target.file[0];
        //     this.loading=true;
        //     Papa.parse(file,{
        //         complete:(output)=>{
        //             this._rows=output.data;
        //             this.loading=false;
        //         },
        //         error:(error)=>{
        //             console.error(error);
        //             this.loading=false;
        //         }
        //     })
        // }
    }  
    UploadingData(event){
        columns=columns;
        data=data;
        this.clickedButtonLabel=event.target.label;
    }
}
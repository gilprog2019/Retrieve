import { LightningElement } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource1';
export default class StaticResourceLWCExample extends LightningElement {
    spring20Logo = My_Resource + '/images/salesforce-spring-2020.jpg';
    summer20Logo = My_Resource + '/images/salesfoce-summer-2020.jpeg';
}
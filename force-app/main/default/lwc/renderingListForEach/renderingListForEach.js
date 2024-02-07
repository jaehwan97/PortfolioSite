import { LightningElement } from 'lwc';

export default class RenderingListForEach extends LightningElement {

    contacts=[
        {
            Id:1,
            Name: 'Sanjay Gupta',
            Title: 'Founder of Tech School'
        },
        {
            Id: 2,
            Name: 'Vikas Gupta',
            Title: 'CEO of Tech School'
        },
        {
            Id: 3,
            Name: 'Aarush Gupta',
            Title: 'MD of Tech School'
        },
    ]
}
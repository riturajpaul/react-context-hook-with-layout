import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './PostStyle.scss';

var PostView = (props) => {
    return (
        <Container>
            <div className="postadd">
                <h3>Add Post &nbsp;&nbsp;&nbsp;
                </h3>
                <Form className="form-container" onSubmit={props.parentSubmitHandler}>
                    <FormGroup>
                        <Label >Name:<span className="required"> * </span></Label>
                        <Input type="text" name="name" className={'form-group' + (props.formData.submitted && !props.formData.name ? ' has-error' : '')} defaultValue={props.formData.name} placeholder="Name" onChange={props.parentOnChnageHandler} />
                        {props.formData.submitted && !props.formData.name &&
                           <div className="help-block">Name is required</div>
                        }                        
                    </FormGroup>
                    <FormGroup>
                        <Label >Email:<span className="required"> * </span></Label>
                        <Input type="email" name="email" className={'form-group' + (props.formData.submitted && !props.formData.email ? ' has-error' : '')}defaultValue={props.formData.email}   placeholder="Email" onChange={props.parentOnChnageHandler}/>
                        {props.formData.submitted && !props.formData.email &&
                           <div className="help-block">Email is required</div>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Label >Phone Number:<span className="required"> * </span></Label>
                        <Input type="text" name="phonenumber" className={'form-group' + (props.formData.submitted && !props.formData.phonenumber ? ' has-error' : '')} placeholder="Phone number" defaultValue={props.formData.phonenumber} onChange={props.parentOnChnageHandler}/>
                        {props.formData.submitted && !props.formData.phonenumber &&
                           <div className="help-block">Phone Number is required</div>
                        }
                    </FormGroup>
                    <Button type="submit" color="primary">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}
export default PostView;
import React, { useRef } from 'react'
import { upload_db_data } from '../api_requests'
import Button from './button'

const Form = ({ update }) => {

	const name_input_ref = useRef(null)
	const subscribed_to_input_ref = useRef(null)


	const submit_form = (e) => {
		e.preventDefault()

		const new_sub = {
			name: name_input_ref.current.value,
			subscribedto: subscribed_to_input_ref.current.value
		}

		upload_db_data(new_sub, (new_sub)=>{
			update(new_sub)
		})
		
		
	}


	return (
		<div className="form-control mt-3">
			<div className="form-group">
				<p>enter name</p>
				<input className="" type="text" ref={name_input_ref}></input>
			</div>
			<div className="form-group">
				<p>enter channel</p>
				<input className="" type="text" ref={subscribed_to_input_ref}></input>
			</div>
			<div className="form-group">
				<Button to="" onClick={submit_form} className="btn btn-primary" text="Enter Subscription" />
			</div>

		</div>
	)
}

export default Form

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	apiAcceptFrinedInvitation,
	apiRejectFrinedInvitation,
} from '../../redux/actions/friend.action'
import Avatar from '../Apps/Avatar'
import Tooltip from '../Tooltip/Tooltip'
import InvitationDecisionButtons from './InvitationDecisionButtons'

const PendingInvitationListItem = ({ sender, id, email }) => {
	const dispatch = useDispatch()

	const [buttonDisabled, setButtonDisabled] = useState(false)
	const handleAcceptFriendInvitation = () => {
		console.log(id)
		dispatch(apiAcceptFrinedInvitation({ id }))
		setButtonDisabled(true)
	}

	const handleRejectFriendInvitation = () => {
		console.log(id)
		dispatch(apiRejectFrinedInvitation({ id }))
		setButtonDisabled(true)
	}
	return (
		<div className='w-full flex items-center justify-between mt-[12px]'>
			<button
				onClick={() => setIsActive(tab)}
				className='flex-1 h-[48px] flex items-center justify-start transform-none text-black p-1 rounded-md'
			>
				<Avatar username={sender} />
				<Tooltip text={sender} content={email} />
			</button>
			<InvitationDecisionButtons
				isDisable={buttonDisabled}
				acceptInvitationHandler={handleAcceptFriendInvitation}
				rejectInvitationHandler={handleRejectFriendInvitation}
			/>
		</div>
	)
}

export default PendingInvitationListItem

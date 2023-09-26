import React, { useState } from 'react'
import Avatar from './Avatar'
import Tooltip from './Tooltip'
import InvitationDecisionButtons from './InvitationDecisionButtons'

const PendingInvitationListItem = ({
	sender,
	id,
	email,
	acceptFriendInvitation = () => {},
	rejectFriendInvitation = () => {},
}) => {
	const [buttonDisabled, setButtonDisabled] = useState(false)
	const handleAcceptFriendInvitation = () => {
		acceptFriendInvitation({ id })
	}

	const handleRejectFriendInvitation = () => {
		rejectFriendInvitation({ id })
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
				rejectInvitationHandler={rejectFriendInvitation}
			/>
		</div>
	)
}

export default PendingInvitationListItem

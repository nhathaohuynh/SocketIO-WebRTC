import React from 'react'
import icons from '../../utils/icons'

const InvitationDecisionButtons = ({
	isDisable,
	rejectInvitationHandler,
	acceptInvitationHandler,
}) => {
	return (
		<div className='flex items-center gap-3 p-1 justify-end'>
			<button
				className='w-[20px] h-[20px] rounded-[2px] bg-[#3ba55d]  text-white flex justify-center items-center hover:opacity-80'
				onClick={acceptInvitationHandler}
				disabled={isDisable}
			>
				<icons.MdCheck size={14} />
			</button>
			<button
				className='w-[20px] h-[20px] rounded-[2px]  bg-red-400 text-white flex justify-center items-center hover:opacity-80'
				disabled={isDisable}
				onClick={rejectInvitationHandler}
			>
				<icons.MdOutlineClear size={14} />
			</button>
		</div>
	)
}

export default InvitationDecisionButtons

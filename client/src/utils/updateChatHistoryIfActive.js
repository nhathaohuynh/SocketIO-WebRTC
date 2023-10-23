import { setMessages } from '../redux/slices/chat.slice'
import { store } from '../redux/store'

const updateChatHistoryIfActive = (data) => {
	const { participants, messages } = data

	// find id of user from token and id from active conversation

	const receiverId = store.getState().chatReducer.chosenChatDetails?.id
	const userId = store.getState().authReducer.user?._id

	if (receiverId && userId) {
		const userInConversation = [userId, receiverId]

		updateChatHistoryIfSameConversationActive({
			participants,
			userInConversation,
			messages,
		})
	}
}

const updateChatHistoryIfSameConversationActive = ({
	participants,
	userInConversation,
	messages,
}) => {
	const result = participants.every((participantId) =>
		userInConversation.includes(participantId),
	)
	if (result) store.dispatch(setMessages(messages))
}

export default updateChatHistoryIfActive

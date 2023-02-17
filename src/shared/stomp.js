import { useEffect, useRef } from 'react'
import { Client } from '@stomp/stompjs'

const connectionURL = 'ws://192.168.20.24:8080/ws/websocket'

const useStompJs = () => {
	const client = useRef(null)

	useEffect(() => {
		client.current = new Client({
			brokerURL: connectionURL,
			debug: (debug) => {
				console.log(debug)
			},
			onConnect: () => {
				client.current.subscribe('/sub/a', (data) => {
					console.log(data)
					new Notification(data.body)
				})
			},
			onDisconnect: () => {
				console.log('Socket is disconnected.')
			},
		})

		client.current.activate()

		return () => {
			client.current.forceDisconnect()
		}
	}, [])

	return client
}

export default useStompJs

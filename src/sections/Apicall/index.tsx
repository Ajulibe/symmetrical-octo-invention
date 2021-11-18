/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "./style"
import { useEffect, useCallback, useState } from "react"
import axios from "axios"
import dayjs from "dayjs"

export const Apiheader = () => {
  const [channels, setChannels] = useState([])

  const fetchChannels = useCallback(async () => {
    const res = await axios.get(
      "https://policy.staging.casava.co/api/policy-service/v1/channels"
    )
    const data = res.data
    const channels = data.data
    setChannels(channels)
    console.log(channels)
  }, [])

  useEffect(() => {
    fetchChannels()
  }, [fetchChannels])

  return (
    <Container>
      <table>
        <tr>
          <th>Channel Name</th>
          <th>Channel Code</th>
          <th>Description</th>
          <th>Policy Code</th>
          <th>Created At</th>
        </tr>
        {channels.map((item: any, i) => {
          return (
            <tr key={`${i}${item.channelName}`}>
              <td>{item.channelName}</td>
              <td>{item.channelCode}</td>
              <td>{item.description}</td>
              <td>{item.policies[0].policy_code}</td>
              <td>
                {dayjs(item.policies[0].created_at).format("DD MMM, YYYY")}
              </td>
            </tr>
          )
        })}
      </table>

      <button>Add Channels</button>
    </Container>
  )
}

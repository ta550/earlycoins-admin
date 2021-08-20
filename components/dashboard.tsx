import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import React from 'react';
import axios from 'axios';

const api = new ApiClient()

const Dashboard = () => {
  const [data, setData] = React.useState({})

  React.useEffect(() => {
    axios({
      method: "GET",
      url: "/admin-panel/api/dashboard"
    }).then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <Box variant="grey">
      <Box variant="white" style={{height: 'auto', display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {/* <img src="./uploads/header-logo.png" />
        <br /><br /><br /> */}
        {/* <h1 style={{ textAlign: 'center', fontSize: '40px'}}>{"Welcome Here"}</h1> */}
        <Box variant="white" style={{ fontSize: '20px', width: "30%", display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total Active Users
          <p style={{}}>{(data.users ? data.users : "0")}</p>
        </Box>
        <Box variant="white" style={{ fontSize: '20px', width: "30%", display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total Active Coins
          <p style={{}}>{(data.activeCoins ? data.activeCoins : "0")}</p>
        </Box>
        <Box variant="white" style={{ fontSize: '20px', width: "30%", display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total In-Active Coins
          <p style={{}}>{(data.inactiveCoins ? data.inactiveCoins : "0")}</p>
        </Box>
      </Box>
      <Box variant="white" style={{height: 'auto', display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {/* <img src="./uploads/header-logo.png" />
        <br /><br /><br /> */}
        {/* <h1 style={{ textAlign: 'center', fontSize: '40px'}}>{"Welcome Here"}</h1> */}
        <Box variant="white" style={{ fontSize: '20px', width: "30%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total Coins
          <p style={{}}>{(data.activeCoins ? data.activeCoins + data.inactiveCoins : "0")}</p>
        </Box>
        <Box variant="white" style={{ fontSize: '20px', lineHeight: '30px', alignItems: 'center' ,width: "30%", display: 'flex', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total Subscribed Emails
          <p style={{}}>{(data.newsletters ? data.newsletters : "0")}</p>
        </Box>
        <Box variant="white" style={{ fontSize: '20px', width: "30%", display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          Total Admin Users
          <p style={{}}>{(data.adminUsers ? data.adminUsers : "0")}</p>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
import { useAction } from 'admin-bro'
import { Button } from '@admin-bro/design-system'
import axios from 'axios'


const myComponent = ({ action }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh'}}>
        <Button as="a" href="/download/newsletter">Download All Records</Button>
    </div>
  )
}

export default myComponent;
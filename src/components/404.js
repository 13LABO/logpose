import React from 'react';
import Button from '@material-ui/core/Button';

const NotFound = () => {
  return ( 
    <div>
      <div className="center" style={{"margin":"3em auto"}}>ページが見つかりませんでした</div>
      <div className="center">
      <Button variant="contained" color="default"　disableElevation href='/'>
        トップに戻る
      </Button>
      </div>
    </div>
   );
}
 
export default NotFound;
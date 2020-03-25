import React from 'react';


const Policy = () => {
  return ( 
    <div className="center mycontainer" >
      <h5 style={{margin:"2em auto"}}>プライバシーポリシー</h5>
      <p className="grey-text text-darken-2">
			本サイトではサービス向上のためGoogle Analyticsを利用しています。
			また、その一部で cookie を利用しユーザー情報の一部を通して分析することもありますが、利用状況の分析にのみこれは利用されます。
			なお cookie はブラウザの設定で拒否することが可能です
			</p>
			<p>
				<a href="https://www.google.com/intl/ja/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">Google によるデータ使用について</a>
      </p>
    </div>
  );
}

export default Policy;
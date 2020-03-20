import React from 'react';


const Policy = () => {
  return ( 
    <div className="center mycontainer" >
      <h5 style={{margin:"2em auto"}}>プライバシーポリシー</h5>
      <p className="grey-text text-darken-2">
			本サイトではサービス向上のためGoogle Analyticsを利用しています。
			また、その一部で cookie を利用しユーザー情報の一部を通して分析することもありますが、利用状況の分析にのみこれは利用されます。
			なお cookie はブラウザの設定で拒否することも可能です。
      {/* お客様は、Google が個人情報として使用または認識できる情報を Google に送信したり、
			第三者によるかかる行為を支援または許可したりしないものとします。
			お客様は適切なプライバシー ポリシーを用意および遵守し、ユーザーからの情報を収集するうえで、
			適用されるすべての法律、ポリシー、規制を遵守するものとします。お客様はプライバシー ポリシーを公開し、
			そのプライバシー ポリシーで Cookie の使用、モバイル デバイスの識別情報（Android の広告識別子、iOS の広告識別子など）、
			またはデータの収集に使われる類似の技術について必ず通知するものとします。 */}
			{/* また、当該サービスではGoogle アナリティクスを使用しており、Google アナリティクスでデータが収集、
			処理される仕組みについても開示する必要があります。こうした情報を開示するには、*/}
			</p><p>
			<a href="https://www.google.com/intl/ja/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">Google によるデータ使用について</a>
			{/* お客様は、本サービスに関連してユーザーのデバイス上で Cookie やその他の情報を保存、
			アクセスする行為が発生し、かかる行為に関する情報の提供とユーザーからの同意が必要であると法律で定められている場合には、
			ユーザーに明確かつ包括的な情報を提供し、同意を得るための商業上合理的な努力を払うものとします。 */}
      </p>
    </div>
  );
}

export default Policy;
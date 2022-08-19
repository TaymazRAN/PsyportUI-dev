export default function OrganizationShow(props) {
	return (
		<>
			<div className="secondaryPanelTitle">اطلاعات کلی</div>
			<div className="textBox">
				<div className="textBoxItem">نام سازمان: {props.data.name}</div>
				<div className="textBoxItem">آدرس: {props.data.address}</div>
				<div className="textBoxItem">کد پستی: {props.data.postCode}</div>
				<div className="textBoxItem">
					شماره تماس: {props.data.contactNumber}
				</div>
				<div className="textBoxItem">ایمیل: {props.data.emailAddress}</div>
				<div className="textBoxItem">توضیحات: {props.data.description}</div>
				<div className="textBoxItem">اطلاعات: {props.data.customData}</div>
			</div>
			<div className="secondaryPanelTitle">اطلاعات مدیر</div>
			<div className="textBox">
				<div className="textBoxItem">
					نام کاربری: {props.data.excutiveUsername}
				</div>
				<div className="textBoxItem">
					گذرواژه: {props.data.executivePassoword}
				</div>
			</div>
			<div className="secondaryPanelTitle">اطلاعات طرح</div>
			<div className="textBox">
				<div className="textBoxItem">نام طرح: {props.data.plan}</div>
				<div className="textBoxItem">
					تاریخ انقضا طرح: {props.data.planExpDate}
				</div>
			</div>
			<div className="secondaryPanelTitle">اطلاعات دیگر</div>
			<div className="textBox">
				<div className="textBoxItem">نوع سازمان: {props.data.typeId}</div>
				<div className="textBoxItem">کد ارجاع: {props.data.refCode}</div>
				<div className="textBoxItem">لوگو: {props.data.logoFileName}</div>
			</div>
		</>
	);
}

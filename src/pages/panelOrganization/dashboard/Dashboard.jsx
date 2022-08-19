import "../../panelAdmin/dashboard.css";
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	BarChart,
	Bar,
} from "recharts";
import QuizIcon from "@mui/icons-material/Quiz";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export const chartData = [
	{
		month: "Jan",
		user: 2400,
	},
	{
		month: "Feb",
		user: 3600,
	},
	{
		month: "Mar",
		user: 5400,
	},
	{
		month: "Jun",
		user: 3200,
	},
	{
		month: "Jul",
		user: 4500,
	},
	{
		month: "Aug",
		user: 2100,
	},
	{
		month: "Sep",
		user: 6500,
	},
	{
		month: "Oct",
		user: 3400,
	},
	{
		month: "Nov",
		user: 5100,
	},
	{
		month: "Dec",
		user: 3800,
	},
];

export default function Dashboard() {
	return (
		<div className="home">
			<div className="featured">
				<div className="featuredItem blue">
					<div className="featuredDataContainer">
						<span className="featuredData">۲۵۳۰</span>
					</div>
					<div className="featuredTitle bold">اعتبار باقی مانده</div>
					<div className="featuredDescription">تعداد آزمون های قابل اختصاص</div>
					<div className="featuredIconContainer">
						<QuizIcon className="featuredIcon" />
					</div>
				</div>
				<div className="featuredItem pink">
					<div className="featuredDataContainer">
						<span className="featuredData">۱۲۷۶۰</span>
					</div>
					<div className="featuredTitle bold">اعتبار مصرف شده</div>
					<div className="featuredDescription">تعداد آزمون های اجرا شده</div>
					<div className="featuredIconContainer">
						<AssessmentOutlinedIcon className="featuredIcon" />
					</div>
				</div>
				<div className="featuredItem yellow">
					<div className="featuredDataContainer">
						<span className="featuredData">130</span>
					</div>
					<div className="featuredTitle bold">تعداد کارمندان</div>
					<div className="featuredDescription">تعداد پرسنل کل عضو شده</div>
					<div className="featuredIconContainer">
						<CorporateFareIcon className="featuredIcon" />
					</div>
				</div>
				<div className="featuredItem green">
					<div className="featuredDataContainer">
						<span className="featuredData">20</span>
					</div>
					<div className="featuredTitle bold">تاییدیه ها</div>
					<div className="featuredDescription">تعداد درخواست های تایید شده</div>
					<div className="featuredIconContainer">
						<Inventory2OutlinedIcon className="featuredIcon" />
					</div>
				</div>
			</div>

			<div className="chartStat">
				<div className="chartBox big">
					<h3 className="chartTitle">گزارش کارنامه آزمون ها</h3>
					<ResponsiveContainer width="100%" height={270}>
						<AreaChart data={chartData}>
							<XAxis dataKey="month" />
							<Area
								type="monotone"
								dataKey="user"
								stroke="#49DEE9"
								fill="#49DEE9"
								fillOpacity={0.6}
							/>
							<Tooltip />
							<CartesianGrid stroke="#dddddd" strokeDasharray="5 5" />
						</AreaChart>
					</ResponsiveContainer>
				</div>
				<div className="chartBox small">
					<h3 className="chartTitle">فعالیت دپارتمان ها</h3>
					<ResponsiveContainer width="100%" height={270}>
						<BarChart data={chartData}>
							<XAxis dataKey="month" />
							<Bar
								type="monotone"
								dataKey="user"
								radius={[10, 10, 0, 0]}
								stroke="#49DEE9"
								fill="#49DEE9"
								fillOpacity={0.6}
							/>
							<Tooltip />
							<CartesianGrid stroke="#dddddd" strokeDasharray="5 5" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}

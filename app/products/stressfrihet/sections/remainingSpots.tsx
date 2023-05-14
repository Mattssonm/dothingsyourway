"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface RemainingSpotsData {
	hero_id: number;
	redirect: boolean;
	provider: String;
	total: number;
	remaining: number;
	taken: number;
}

const RemainingSpots = () => {
	const [data, setData] = useState<RemainingSpotsData>();

	useEffect(() => {
		const fetchRemainingSpotsData = async () => {
			const url = window.location.href;
			const response = await fetch(
				`https://automatehero.io/api/scarcity/ah_sdt_hero_UkJDTG85TFdRd1RX?sdt_scarcity_host=${url}`,
				{
					headers: {
						accept: "*/*",
						"accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
						"sec-ch-ua":
							'"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
						"sec-ch-ua-mobile": "?0",
						"sec-ch-ua-platform": '"macOS"',
						"sec-fetch-dest": "empty",
						"sec-fetch-mode": "cors",
						"sec-fetch-site": "cross-site",
					},
					referrer: url,
					referrerPolicy: "strict-origin-when-cross-origin",
					body: null,
					method: "GET",
					mode: "cors",
					credentials: "omit",
				}
			);
			const data: { data: RemainingSpotsData } = await response.json();
			setData(data.data);
		};

		fetchRemainingSpotsData();
	}, []);

	

	return (
		<>
			{data && (
				<>
					<p className="italic">
						Det finns just nu endast {
							data.remaining>10 ? (`${data.remaining-10} platser kvar till detta rabatterade pris`) : 
								data.remaining>5 ? (`${data.remaining-5} platser kvar till detta rabatterade pris`) :
									(`${data.remaining} platser kvar`)
						}
						
					</p>
				</>
			)}
		</>
	);
};

export default RemainingSpots;

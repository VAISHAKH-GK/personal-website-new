export interface Certification {
	name: string;
	issuer: string;
	credlyUrl: string;
	dateIssued: string;
	expirationDate?: string;
	inProgress?: boolean;
	badgeImageUrl?: string;
}

export const certifications: Certification[] = [
	{
        name: "CCNA: Introduction To Networking",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/2a3006d0-d142-4405-94b4-5013de851098/public_url",
		dateIssued: "Jun 2025",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
	},
	{
        name: "CCNA: Switching, Routing, Wireless Essentials",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/03e9225c-b0e7-4da4-9285-ab1645e9184d/public_url",
		dateIssued: "Sept 2025",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
	},
	{
        name: "CCNA: Enterprise Networking, Security, and Automation",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/25e63d7d-ec69-4cb8-a103-504432cb1c86/public_url",
		dateIssued: "Nov 2025",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
	},
	{
        name: "Cisco Networking Academy Learn-A-Thon 2026",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/4c723be1-7afd-4a03-9e8c-a5a3d4043510/public_url",
		dateIssued: "Jul 2026",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/7bf55491-f0df-488f-84bf-4d51ada45316/blob",
	},
	{
        name: "Networking Academy Learn-A-Thon 2025",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/14add015-3de3-478c-8e3c-a11cb51a2d6a/public_url",
		dateIssued: "Jul 2026",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/8bf3e17f-1982-4539-a1f7-ba85c749407a/blob",
	},
	{
        name: "Cyber Threat Management",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/2adaf005-9537-4dd2-8458-fab064070e65/public_url",
		dateIssued: "May 2026",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
	},
	{
        name: "Endpoint Security",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/cdee8cad-d78f-4108-a1dd-4d07f8f80df0/public_url",
		dateIssued: "May 2026",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/0ca5f542-fb5e-4a22-9b7a-c1a1ce4c3db7/EndpointSecurity.png",
	},
	{
        name: "Network Defense",
		issuer: "Cisco",
		credlyUrl: "https://www.credly.com/badges/a1f3eae7-cf92-4e00-97bf-d58172f5fedb/public_url",
		dateIssued: "May 2026",
		badgeImageUrl: "https://images.credly.com/size/340x340/images/51526f76-711b-4caf-b04d-27f89512b112/NetworkDefense_v1_091721.png",
	},
];

//src/pages/List.js
import React from "react";

//tr 태그를 만들기 위한 함수 
const User = ({userData}) => { 
	return (
			<tr>
					<td> {userData.name} </td>
					<td> {userData.email} </td>
			</tr> 
		
	)
}; 

const Userlist = () => { 
//서버로부터 받아오는 데이터 - 배열 
		const users = [
				{email: 'user1@gmail.com', name: '유저일'}, 
				{email: 'user2@gmail.com', name: '유저이'}, 
				{email: 'user3@gmail.com', name: '유저삼'}, 
				{email: 'user4@gmail.com', name: '유저사'}, 
		];  

		return (
			<table>
				<thead>
					<tr>
							<th>이름</th>
							<th>이메일</th>
					</tr>
				</thead>
				<tbody> 
					{users.map(user => <User userData={user} />)}   
				</tbody> 
			</table>	
		); 
}; 

export default Userlist;

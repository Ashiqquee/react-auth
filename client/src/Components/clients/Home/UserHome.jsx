import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userAxios from "../../../Axios/userAxios.js";

function UserHome() {
    const [name, setName] = useState("");
    const token = useSelector((store) => store.Client.Token);
    if (token) {
        useEffect(() => {
            if (token) {
                userAxios
                    .get("/getDetails", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((res) => {
                        setName(res.data.name);
                    });
            }
        }, [token]);
    } else {
        console.log("no token");
    }

    return (
        <div>
            <div className="p-3">
                <div className="m-5">
                    <div className="d-flex justify-content-center p-3">{name ? <b>Welcome {name}</b> : ""}</div>
                    <div className="d-flex justify-content-center">
                        <img
                            src="https://kyan-2015.s3.eu-west-1.amazonaws.com/production-2018/uploads/news_entry/image/255/medium_news_size_next-js-header.jpg"
                            alt="...."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;

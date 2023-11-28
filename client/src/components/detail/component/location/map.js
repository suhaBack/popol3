/* global kakao */
import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Location = (props) => {
    const [map, setmap] = useState(null);

    const str = props.location_info;
    const words = str.split(',').map(Number);

    // 지도 생성
    useEffect(() => {
        setTimeout(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(words[0], words[1]),
            level: 3
        };

        const kakaoMap = new kakao.maps.Map(container, options);
        setmap(kakaoMap);
        }, 1200); // 1초 후 로딩
    }, []);
    
    // 마커 표시
    useEffect(() => {
        if (map) {
            let markerPosition = new kakao.maps.LatLng(words[0], words[1]);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        }
    }, [map]);

    return (
        <>
            {/* 맵 크기 */}
            <div id="map"style={{
                width: '100%', height: '200px'
                }}>
            </div>
        </>
    );
};

export default Location;
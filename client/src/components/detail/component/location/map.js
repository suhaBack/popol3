/* global kakao */
import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Location = () => {
    const [map, setmap] = useState(null);

    // 지도 생성
    useEffect(() => {
        setTimeout(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.06616129484477, 127.08112712333741),
            level: 3
        };

        const kakaoMap = new kakao.maps.Map(container, options);
        setmap(kakaoMap);
        }, 1000); // 1초 후 로딩
    }, []);
    
    // 마커 표시
    useEffect(() => {
        if (map) {
            let markerPosition = new kakao.maps.LatLng(37.06616129484477, 127.08112712333741);
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
                width: '400px', height: '200px'
                }}>
            </div>
        </>
    );
};

export default Location;
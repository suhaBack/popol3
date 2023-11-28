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
        }, 1200); // 1.2초 후 로딩
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

    const panTo = () => {
        // 이동할 위도 경도 위치를 생성합니다 
        const moveLatLon = new kakao.maps.LatLng(words[0], words[1]);
        
        // 지도 중심을 부드럽게 이동시킵니다
        // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
        map.panTo(moveLatLon);
    };

    return (
        <>
            {/* 맵 크기 */}
            <div id="map"style={{
                width: '100%', height: '400px'
                }}>
            </div>
            <div>
                <button onClick={panTo}>지도 원위치</button>
            </div>
        </>
    );
};

export default Location;
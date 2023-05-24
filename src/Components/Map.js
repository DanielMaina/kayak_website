import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 3vh;
  padding-bottom: 56.25%; /* Maintain a 16:9 aspect ratio (adjust as needed) */
  height: 0;
  overflow: hidden;
`;

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11587.221042634363!2d-79.674596!3d43.443783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5c8cca0d8f81%3A0x2b2eaee543507aef!2sWai%20Nui%20Canoe%20Club!5e0!3m2!1sen!2sus!4v1684937903200!5m2!1sen!2sus"
        frameBorder="0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </MapContainer>
  );
}

export default Map

// return (
//     <div>
//         <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11587.221042634363!2d-79.674596!3d43.443783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5c8cca0d8f81%3A0x2b2eaee543507aef!2sWai%20Nui%20Canoe%20Club!5e0!3m2!1sen!2sus!4v1684937903200!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//     </div>
//   )
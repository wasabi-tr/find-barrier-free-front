'use client'
import React, { FC } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = {
  lat: 35.6945485,
  lng: 139.9827277,
}
const positionFunabashi = {
  lat: 35.6945485,
  lng: 139.9827277,
}
const zoom = 13
type Props = {
  latLng: { lat: number; lng: number } | { lat: number; lng: number }[]
}

const Map: FC<Props> = ({ latLng }) => {
  let markers
  if (Array.isArray(latLng)) {
    // latLngが配列の場合
    markers = latLng.map((item, index) => (
      <Marker key={index} position={item} />
    ))
  } else {
    // latLngが単一のオブジェクトの場合
    markers = <Marker position={latLng} />
  }
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {markers}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map

import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { Text } from "../../../../shared/text"
import { spacing } from "../../../../../theme/spacing"
import { palette } from "../../../../../theme/palette"
import Mapbox from "@mapbox/react-native-mapbox-gl"
const nearbyAttractionsData = require("../nearby-attractions.data.json")

const ROOT: ViewStyle = {}
Mapbox.setAccessToken(
  "pk.eyJ1Ijoiamh1c2tleSIsImEiOiJjamFicHEyYmowMmh4MzNwbGJsMHFmNHhoIn0._2iDBeHi7lUMHWUEdTFrqA",
)

export class AttractionsMap extends React.Component<{}, {}> {
  render() {
    return (
      // <View />
      <Mapbox.MapView
        centerCoordinate={nearbyAttractionsData.locations[0].geometry.coordinates}
        rotateEnabled={false}
        pitchEnabled={false}
        styleURL="mapbox://styles/jhuskey/cjabpqolp3lf02so534xe4q9g"
        style={{ width: "100%", height: 506, flex: 1 }}
        showUserLocation
      >
        {Object.keys(nearbyAttractionsData).map(key => {
          this.renderCategory(nearbyAttractionsData[key])
        })}
      </Mapbox.MapView>
    )
  }

  renderCategory = category => category.map(location => this.renderLocation(location))

  renderLocation = location => {
    return <Mapbox.PointAnnotation key={location.id} coordinate={location.geometry.coordinates} />
  }
}

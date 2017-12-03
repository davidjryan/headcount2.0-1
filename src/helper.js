export default class DistrictRepository {
  constructor(data) {
    this.data = this.mutateData(data)
  }

  mutateData(data) {
    const arrayToObject = data.reduce((obj, district) => {
      const upperLocation = district.Location.toUpperCase()
      const roundedData = Math.round(1000*(district.Data))/1000 || 0

      if (upperLocation in obj) {
        obj[upperLocation][district.TimeFrame] = roundedData
      } else {
        obj[upperLocation] = {location: upperLocation,
                              [district.TimeFrame]: roundedData}
      }
      return obj
    },{})

  return arrayToObject
  }

  findByName(searchTerm) {
    if (searchTerm) {
      const upperSearch = searchTerm.toUpperCase()

      return upperSearch in this.data ? this.data[upperSearch] : undefined
    } else {
      return undefined
    }
  }

  findAllMatches(searchTerm) {
    if(!searchTerm) {
      const allData = Object.keys(this.data).map(key => {
        return {
          location: key,
          data: this.data[key]
        }
      });
      return allData;
    }
    searchTerm = searchTerm.toUpperCase();
    const matchKeys = Object.keys(this.data).filter(key => key.includes(searchTerm));
    const matches = matchKeys.map(matchKey => {
      return {
        location: matchKey,
        data: this.data[matchKey]
      }
    });
    return matches;
  }
}

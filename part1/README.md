### notes
```
const Jstests = (props) => {
  let greetings = ['hi', 'hello', 'sup']
  greetings.push('yo')
  const [first, ...rest] = greetings
  let output = rest.map(val => <p>{val} {props.jname}</p>)
  output = output.concat(<p>And I almost forgot, {first} {props.jname}</p>)

  const ladybug1 = {
    name: 'Helena',
    spotCount: 12,
    wingspan: '4 cm',
    bodyColor: 'red'
  }

  const writeLadybug = (ladyname, spotCount, wingspan, bodyColor = 'red') => (
    <p>Did you see the ladybug named {ladyname}? She is {bodyColor} with {spotCount} spots, and has a wingspan of {wingspan}!</p>
  )
  const sayLoud = myText => <h2>I'm gonna {myText.toUpperCase()}</h2>

  return (
      <div>
        {output}
        <p>Did you see the ladybug named {ladybug1.name}? She is {ladybug1.bodyColor} with {ladybug1.spotCount} spots, and has a wingspan of {ladybug1.wingspan}!</p>
        {writeLadybug('booboo', 14, '6 cm')}
        <br />
        {sayLoud('yell real loud')}
      </div>
  )
}
```
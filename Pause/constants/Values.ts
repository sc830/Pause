/* Values.ts

  Props:  none

  Export: constant values as named variables

  Functions:  allow access to standard values by name

  Usage: add import statement in any other file and reference colors by name
    import colors from '@/constants/Values'
    style={{ borderRadius: values.borderRadius }}

  References:
    Altered from Colors.ts
    Added interface/props from ChatGPT for troubleshooting
*/

// Values.ts

// Define the interface for the values object
interface Values {
  borderRadius: number;
  componentWidth: number;
}

// Define and export the values object with the correct type
const values: Values = {
  borderRadius: 15,
  componentWidth: 0.95,
};

export default values;

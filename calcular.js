function mostrarResultado(escolha){
var n1 = parseFloat(document.getElementById('num1').value);
var n2 = parseFloat(document.getElementById('num2').value);
var r;
var c = escolha;

switch(c)
	{
	case '1':
		r = n1 + n2;
		break;
		
	case '2':
		r = n1 - n2;
		break;
		
	case '3':
		r = n1*n2;
		break;
		
	case '4': 
		r = n1/n2;
		break;
		
	case '5':
		r = Math.pow(n1, n2);
		break;
		
	case '6':
		r = 1;
		while ( n1 > 0)
		{
			r = r * n1;
			n1--;
		}
		
		break;
		
	case '7':
		i = 0;
		while( n1 <= 0)
		{
			numBinario[i] = n1 % 2;
			n1 = n1/2;
			i++;
		}
		
		
		break;
				
	default:
		break;
			
	}
document.getElementById('result').value=r;

	

}
mport javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class basic extends JFrame implements ActionListener {
    private static final long serialVersionUID = 1L;
	private Container con = getContentPane();
	JLabel result = new JLabel();
	Font promptFont = new Font("Times", Font.BOLD, 12);
	Font resultFont = new Font("Times", Font.BOLD, 20);
	JButton add = new JButton("add");
	JButton subtract = new JButton("subtract");
	JButton multiply = new JButton("multiply");
	public basic(){
		super("Calculator");
		setSize(300,300);
		con.setLayout(new FlowLayout());
		result.setFont(resultFont);
		con.add(add);
		con.add(subtract);
		con.add(multiply);
		con.add(result);
		add.addActionListener(this);
		subtract.addActionListener(this);
		multiply.addActionListener(this);	
	}
        public static void main(String[] args) {
        basic demo = new basic();
		demo.setVisible(true);
    }
        @Override
	public void actionPerformed(ActionEvent e) {
		
		Object source = e.getSource();
		if(source == add)
		{
                        int num1=3;	
			int num2=7;
			int RESULT = num1 + num2;
			String res = new Integer(RESULT).toString();
			result.setText("x=3 y=7 Addition=" + res);		
		}
		if(source == subtract)
		{
                        int num1=3;
                        int num2=7;
			int RESULT = num1 - num2;
			String res = new Integer(RESULT).toString();
			result.setText("x=3 y=7 subtraction=" + res);	
		}
		if(source == multiply)
		{
                        int num1=3;
                        int num2=7;
			int RESULT = num1 * num2;
			String res = new Integer(RESULT).toString();
			result.setText("x=3 y=7 Multiplication=" + res);
		}
    
}
}
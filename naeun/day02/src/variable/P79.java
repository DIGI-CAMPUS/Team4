package variable;


public class P79 {

	public static void main(String[] args) {
		int credit = 0;
		String grade = "";
		if (credit >= 800) {
			grade = "high";
		} else {
			grade = "low";
		}
		System.out.println(grade);

		int aa = 0;
		String bb = (aa >= 800) ? "high" : "low";
		System.out.println(bb);
	}

}

package com.company;
import java.lang.StringBuilder;
public class Main {

    public static void main(String[] args) {
	// write your code heretr
        Solution myS= new Solution();
        String s = myS.toCamelCase("trevor_hhh");
        System.out.println("string - " + s);

    }
}
 class Solution{

    static String toCamelCase(String s){
        if (s == null || s.isEmpty()) return s; // empty string
        String finalStr = "";
        String delim = "-";
        if (s.indexOf(delim) == -1) {
            delim = "_";
        }
        String[] words = s.split(delim);
        for (String word : words) {
            if (word == null || word.isEmpty()) {
                // double hypen
            } else if (finalStr == null || finalStr.isEmpty()) {
                finalStr = finalStr + word; // first word
            } else {
                String newWord = word.substring(0, 1).toUpperCase() + word.substring(1, word.length());
                finalStr = finalStr + newWord;
            }
        }

        return finalStr;
    }
}

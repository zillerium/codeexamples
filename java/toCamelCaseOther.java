package com.company;
import java.lang.StringBuilder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {

    public static void main(String[] args) {
	// write your code heretr
        Solution3 myS= new Solution3();
        String s = myS.toCamelCase("one-two-three");
        System.out.println("string - " + s);

    }
}

class Solution3{
// does not fully work - code from codewars
    static String toCamelCase(String s){
        String[] words = s.split("[_\\-]");
        s=words[0];
        for(int i=1; i<words.length; i++)
            s+=words[i].substring(0,1).toUpperCase()+words[i].substring(1).toLowerCase();
        return s;
    }
}

class Solution2{
// does not fully work, code from codewars
    static String toCamelCase(String s){
        Matcher m = Pattern.compile("[_|-](\\w)").matcher(s);
        StringBuffer sb = new StringBuffer();
        while (m.find()) {
            m.appendReplacement(sb, m.group(1).toUpperCase());
        }
        return m.appendTail(sb).toString();
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

// styles.ts
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    // padding: 32,
    padding: 16,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#111",
  },

  header: {
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 4,
  },

  title: {
    fontSize: 12,
    marginTop: 4,
  },

  contactRow: {
    flexDirection: "row",
    marginTop: 6,
    flexWrap: "wrap",
    fontSize: 10.5,
  },

  contactItem: {
    marginRight: 8,
  },

  hr: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 6,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  paragraph: {
    lineHeight: 1,
  },

  bullet: {
    flexDirection: "row",
    marginBottom: 4,
  },

  bulletText: {
    flex: 1,
    lineHeight: 1,
  },

  twoCol: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  role: {
    fontWeight: "bold",
    fontSize: 11,
    letterSpacing: 1.2,
  },

  date: {
    fontSize: 10,
    color: "#555",
  },
  descs: {
    marginTop: 5,
    marginLeft: 8,
  },

  descRow: {
    flexDirection: "row",
    marginBottom: 5, // vertical spacing between bullets
  },

  bulletDot: {
    width: 10,
    fontSize: 10,
    marginTop: 1,
  },

  desc: {
    flex: 1,
    fontSize: 11,
    lineHeight: 1.45, // THIS is what makes it breathe
    color: "#222",
  },
});

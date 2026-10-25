// styles.js — resume design system
// Amber accent echoes the portfolio brand; near-black ink prints cleanly.
import { StyleSheet } from '@react-pdf/renderer';

const ACCENT = '#b45309'; // amber-700
const INK = '#1e293b'; // slate-800
const MUTED = '#5b6b7c'; // slate-ish grey for secondary text

export const styles = StyleSheet.create({
  page: {
    padding: 26,
    paddingTop: 22,
    fontSize: 9.3,
    fontFamily: 'Helvetica',
    color: INK,
  },

  // Header
  header: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  accentBar: {
    width: 44,
    height: 2.2,
    backgroundColor: ACCENT,
    marginTop: 5,
  },
  title: {
    fontSize: 10,
    marginTop: 6,
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
    fontSize: 8.6,
  },
  contactItem: {
    color: MUTED,
  },
  contactLink: {
    color: ACCENT,
    textDecoration: 'none',
  },
  sep: {
    marginHorizontal: 5,
    color: '#9aa7b4',
  },

  // Sections
  section: {
    marginTop: 7,
  },
  sectionTitleRow: {
    borderBottomWidth: 1.1,
    borderBottomColor: ACCENT,
    paddingBottom: 2,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 10.3,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: ACCENT,
  },
  paragraph: {
    lineHeight: 1.3,
    fontSize: 9.3,
  },

  // Bullets
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletDot: {
    width: 9,
    fontSize: 9.3,
    color: ACCENT,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.3,
    fontSize: 9.3,
  },

  // Experience blocks
  expBlock: {
    marginBottom: 5,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  role: {
    fontWeight: 'bold',
    fontSize: 10.4,
  },
  dates: {
    fontSize: 9,
    color: ACCENT,
    fontWeight: 'bold',
  },
  orgLine: {
    fontSize: 8.8,
    color: MUTED,
    marginTop: 1,
    marginBottom: 2.5,
  },
  techLine: {
    fontStyle: 'italic',
    fontSize: 8.4,
    color: MUTED,
    marginTop: 2.5,
  },
});

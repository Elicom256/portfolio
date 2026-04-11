import { useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FaDiscord, FaFacebook, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = useMemo(
    () => [
      { href: 'mailto:elicomelijah330@gmail.com', icon: <Mail className='h-5 w-5' />, label: 'Email' },
      {
        href: 'https://www.linkedin.com/in/mugisha-elijah-88a291239/',
        icon: <FaLinkedin className='h-5 w-5' />,
        label: 'LinkedIn',
      },
      { href: 'https://x.com/ElicomElijah', icon: <FaXTwitter className='h-5 w-5' />, label: 'X' },
      { href: 'https://www.facebook.com/', icon: <FaFacebook className='h-5 w-5' />, label: 'Facebook' },
      { href: 'https://t.me/', icon: <FaTelegram className='h-5 w-5' />, label: 'Telegram' },
      { href: 'https://discord.com/', icon: <FaDiscord className='h-5 w-5' />, label: 'Discord' },
    ],
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name') || 'Visitor';
    const email = form.get('email') || '';
    const message = form.get('message') || '';
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:elicomelijah330@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className='px-4 py-12 md:px-10 pt-24'>
      <div className='mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30'>
        <div className='mb-8 text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-amber-300/80'>Contact</p>
          <h2 className='mt-4 text-3xl font-semibold text-white'>Let's build something together.</h2>
          <p className='mt-3 text-slate-400'>
            Reach out for secure Web2 architecture, scalable product delivery, or a quick chat about your next system.
          </p>
        </div>

        <form className='grid gap-6' onSubmit={handleSubmit}>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' name='name' placeholder='Your name' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' type='email' placeholder='Your email' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='message'>Message</Label>
            <textarea
              id='message'
              name='message'
              rows='5'
              className='min-h-[140px] resize-none rounded-md border border-slate-800/90 bg-slate-950/80 px-3 py-3 text-base text-slate-100 outline-none transition focus:border-amber-300 focus:ring-amber-300/30'
              placeholder='Tell me about your project'
            />
          </div>

          <div className='flex justify-center'>
            <Button type='submit' className='rounded-full px-8 py-3 text-sm font-semibold' variant='default'>
              Send message
            </Button>
          </div>
        </form>

        <div className='mt-10 border-t border-slate-800/70 pt-8'>
          <p className='text-center text-sm uppercase tracking-[0.35em] text-slate-500'>Social</p>
          <div className='mt-4 flex flex-wrap justify-center gap-4'>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/90 bg-slate-900/90 text-slate-100 transition hover:border-amber-300 hover:text-amber-300'
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

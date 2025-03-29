import {heroui} from '@heroui/theme';
import { nextui } from "@nextui-org/theme";
import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{ts,tsx,svg}",
    "./chat/vn-vi/**/*.{ts,tsx}",
    "./home/**/*.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)'
  			],
  			mono: [
  				'var(--font-geist-mono)'
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			flip: {
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			},
  			rotate: {
  				to: {
  					transform: 'rotate(90deg)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0px)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			'shine-pulse': {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			enterFromRight: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(200px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			enterFromLeft: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-200px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			exitToRight: {
  				from: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'translateX(200px)'
  				}
  			},
  			exitToLeft: {
  				from: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'translateX(-200px)'
  				}
  			},
  			scaleIn: {
  				from: {
  					opacity: '0',
  					transform: 'rotateX(-10deg) scale(0.9)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'rotateX(0deg) scale(1)'
  				}
  			},
  			scaleOut: {
  				from: {
  					opacity: '1',
  					transform: 'rotateX(0deg) scale(1)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'rotateX(-10deg) scale(0.95)'
  				}
  			},
  			fadeIn: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			fadeOut: {
  				from: {
  					opacity: '1'
  				},
  				to: {
  					opacity: '0'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			flip: 'flip 6s infinite steps(2, end)',
  			rotate: 'rotate 3s linear infinite both',
  			meteor: 'meteor 5s linear infinite',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			scaleIn: 'scaleIn 200ms ease',
  			scaleOut: 'scaleOut 200ms ease',
  			fadeIn: 'fadeIn 200ms ease',
  			fadeOut: 'fadeOut 200ms ease',
  			enterFromLeft: 'enterFromLeft 250ms ease',
  			enterFromRight: 'enterFromRight 250ms ease',
  			exitToLeft: 'exitToLeft 250ms ease',
  			exitToRight: 'exitToRight 250ms ease',
  			grid: 'grid 15s linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	},
  	keyframes: {
  		typing: {
  			'0%, 100%': {
  				transform: 'translateY(0)',
  				opacity: '0.5'
  			},
  			'50%': {
  				transform: 'translateY(-2px)',
  				opacity: '1'
  			}
  		},
  		'loading-dots': {
  			'0%, 100%': {
  				opacity: '0'
  			},
  			'50%': {
  				opacity: '1'
  			}
  		},
  		wave: {
  			'0%, 100%': {
  				transform: 'scaleY(1)'
  			},
  			'50%': {
  				transform: 'scaleY(0.6)'
  			}
  		},
  		blink: {
  			'0%, 100%': {
  				opacity: '1'
  			},
  			'50%': {
  				opacity: '0'
  			}
  		}
  	},
  	'text-blink': {
  		'0%, 100%': {
  			color: 'var(--primary)'
  		},
  		'50%': {
  			color: 'var(--muted-foreground)'
  		}
  	},
  	'bounce-dots': {
  		'0%, 100%': {
  			transform: 'scale(0.8)',
  			opacity: '0.5'
  		},
  		'50%': {
  			transform: 'scale(1.2)',
  			opacity: '1'
  		}
  	},
  	'thin-pulse': {
  		'0%, 100%': {
  			transform: 'scale(0.95)',
  			opacity: '0.8'
  		},
  		'50%': {
  			transform: 'scale(1.05)',
  			opacity: '0.4'
  		}
  	},
  	'pulse-dot': {
  		'0%, 100%': {
  			transform: 'scale(1)',
  			opacity: '0.8'
  		},
  		'50%': {
  			transform: 'scale(1.5)',
  			opacity: '1'
  		}
  	},
  	'shimmer-text': {
  		'0%': {
  			backgroundPosition: '150% center'
  		},
  		'100%': {
  			backgroundPosition: '-150% center'
  		}
  	},
  	'wave-bars': {
  		'0%, 100%': {
  			transform: 'scaleY(1)',
  			opacity: '0.5'
  		},
  		'50%': {
  			transform: 'scaleY(0.6)',
  			opacity: '1'
  		}
  	},
  	shimmer: {
  		'0%': {
  			backgroundPosition: '200% 50%'
  		},
  		'100%': {
  			backgroundPosition: '-200% 50%'
  		}
  	},
  	'spinner-fade': {
  		'0%': {
  			opacity: '0'
  		},
  		'100%': {
  			opacity: '1'
  		}
  	}
  },
  
  plugins: [tailwindcssAnimate,nextui(),heroui()],
};

export default config;

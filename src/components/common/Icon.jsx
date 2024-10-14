import { icons } from 'lucide-react';
import { PropTypes } from 'prop-types';

const Icon = ({ name, color = 'currentColor', size = 20 }) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        console.warn(`Warning: Icon "${name}" not found. Please check the icon name.`);
        return null;
    }

    return <LucideIcon color={color} size={size} />;
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;

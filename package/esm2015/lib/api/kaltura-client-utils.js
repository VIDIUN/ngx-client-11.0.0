/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class KalturaClientUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    static fromServerDate(value) {
        return (value ? new Date(value * 1000) : null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static toServerDate(value) {
        return value ? Math.round(value.getTime() / 1000) : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static getStartDateValue(value) {
        if (value) {
            value.setHours(0);
            value.setMinutes(0);
            value.setSeconds(0);
            return value;
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static getEndDateValue(value) {
        if (value) {
            value.setHours(23);
            value.setMinutes(59);
            value.setSeconds(59);
            return value;
        }
        else {
            return null;
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtY2xpZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNOzs7OztJQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBYztRQUVoQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEQ7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFZO1FBRTVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDNUQ7Ozs7O0lBRUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQVk7UUFFcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDYjtRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO0tBQ0Q7Ozs7O0lBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFZO1FBRWxDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hCO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7S0FDRDtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNsaWVudFV0aWxzXG57XG4gICAgc3RhdGljIGZyb21TZXJ2ZXJEYXRlKHZhbHVlIDogbnVtYmVyKSA6IERhdGVcbiAgICB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSAqIDEwMDApIDogbnVsbCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvU2VydmVyRGF0ZSh2YWx1ZSA6IERhdGUpIDogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyBNYXRoLnJvdW5kKHZhbHVlLmdldFRpbWUoKSAvIDEwMDApIDogbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RhcnREYXRlVmFsdWUodmFsdWUgOiBEYXRlKSA6IERhdGVcbiAgICB7XG5cdCAgICBpZiAodmFsdWUpIHtcblx0XHQgICAgdmFsdWUuc2V0SG91cnMoMCk7XG5cdFx0ICAgIHZhbHVlLnNldE1pbnV0ZXMoMCk7XG5cdFx0ICAgIHZhbHVlLnNldFNlY29uZHMoMCk7XG5cdFx0ICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH1lbHNle1xuXHQgICAgXHRyZXR1cm4gbnVsbDtcblx0ICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RW5kRGF0ZVZhbHVlKHZhbHVlIDogRGF0ZSkgOiBEYXRlXG4gICAge1xuXHQgICAgaWYgKHZhbHVlKSB7XG5cdCAgICAgICAgdmFsdWUuc2V0SG91cnMoMjMpO1xuXHRcdCAgICB2YWx1ZS5zZXRNaW51dGVzKDU5KTtcblx0XHQgICAgdmFsdWUuc2V0U2Vjb25kcyg1OSk7XG5cdCAgICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgfWVsc2V7XG5cdFx0ICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuICAgIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KalturaClientUtils = /** @class */ (function () {
    function KalturaClientUtils() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KalturaClientUtils.fromServerDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value ? new Date(value * 1000) : null);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KalturaClientUtils.toServerDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? Math.round(value.getTime() / 1000) : null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KalturaClientUtils.getStartDateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            value.setHours(0);
            value.setMinutes(0);
            value.setSeconds(0);
            return value;
        }
        else {
            return null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KalturaClientUtils.getEndDateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            value.setHours(23);
            value.setMinutes(59);
            value.setSeconds(59);
            return value;
        }
        else {
            return null;
        }
    };
    return KalturaClientUtils;
}());
export { KalturaClientUtils };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtY2xpZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxJQUFBOzs7Ozs7O0lBRVcsaUNBQWM7Ozs7SUFBckIsVUFBc0IsS0FBYztRQUVoQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEQ7Ozs7O0lBRU0sK0JBQVk7Ozs7SUFBbkIsVUFBb0IsS0FBWTtRQUU1QixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQzVEOzs7OztJQUVNLG9DQUFpQjs7OztJQUF4QixVQUF5QixLQUFZO1FBRXBDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2I7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDWjtLQUNEOzs7OztJQUVNLGtDQUFlOzs7O0lBQXRCLFVBQXVCLEtBQVk7UUFFbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEI7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDWjtLQUNEOzZCQW5DTDtJQW9DQyxDQUFBO0FBbkNELDhCQW1DQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEthbHR1cmFDbGllbnRVdGlsc1xue1xuICAgIHN0YXRpYyBmcm9tU2VydmVyRGF0ZSh2YWx1ZSA6IG51bWJlcikgOiBEYXRlXG4gICAge1xuICAgICAgICByZXR1cm4gKHZhbHVlID8gbmV3IERhdGUodmFsdWUgKiAxMDAwKSA6IG51bGwpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NlcnZlckRhdGUodmFsdWUgOiBEYXRlKSA6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gTWF0aC5yb3VuZCh2YWx1ZS5nZXRUaW1lKCkgLyAxMDAwKSA6IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXJ0RGF0ZVZhbHVlKHZhbHVlIDogRGF0ZSkgOiBEYXRlXG4gICAge1xuXHQgICAgaWYgKHZhbHVlKSB7XG5cdFx0ICAgIHZhbHVlLnNldEhvdXJzKDApO1xuXHRcdCAgICB2YWx1ZS5zZXRNaW51dGVzKDApO1xuXHRcdCAgICB2YWx1ZS5zZXRTZWNvbmRzKDApO1xuXHRcdCAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9ZWxzZXtcblx0ICAgIFx0cmV0dXJuIG51bGw7XG5cdCAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEVuZERhdGVWYWx1ZSh2YWx1ZSA6IERhdGUpIDogRGF0ZVxuICAgIHtcblx0ICAgIGlmICh2YWx1ZSkge1xuXHQgICAgICAgIHZhbHVlLnNldEhvdXJzKDIzKTtcblx0XHQgICAgdmFsdWUuc2V0TWludXRlcyg1OSk7XG5cdFx0ICAgIHZhbHVlLnNldFNlY29uZHMoNTkpO1xuXHQgICAgICAgIHJldHVybiB2YWx1ZTtcblx0ICAgIH1lbHNle1xuXHRcdCAgICByZXR1cm4gbnVsbDtcblx0ICAgIH1cbiAgICB9XG59XG4iXX0=
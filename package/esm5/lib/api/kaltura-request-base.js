/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaObjectBase } from './kaltura-object-base';
/**
 * @record
 */
export function KalturaRequestBaseArgs() { }
var KalturaRequestBase = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRequestBase, _super);
    function KalturaRequestBase(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    KalturaRequestBase.prototype.setNetworkTag = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (!tag || tag.length > 10) {
            console.warn("cannot set network tag longer than 10 characters. ignoring tag '" + tag);
        }
        else {
            this._networkTag = tag;
        }
        return this;
    };
    /**
     * @return {?}
     */
    KalturaRequestBase.prototype.getNetworkTag = /**
     * @return {?}
     */
    function () {
        return this._networkTag;
    };
    return KalturaRequestBase;
}(KalturaObjectBase));
export { KalturaRequestBase };
if (false) {
    /** @type {?} */
    KalturaRequestBase.prototype._networkTag;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1yZXF1ZXN0LWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL2thbHR1cmEtcmVxdWVzdC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHVCQUF1QixDQUFDOzs7OztBQVFqRixJQUFBO0lBQXdDLDhDQUFpQjtJQUlyRCw0QkFBWSxJQUE0QjtlQUNwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsR0FBVztRQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBbUUsR0FBSyxDQUFDLENBQUM7U0FDMUY7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQzFCO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmOzs7O0lBRUQsMENBQWE7OztJQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDM0I7NkJBNUJMO0VBUXdDLGlCQUFpQixFQXFCeEQsQ0FBQTtBQXJCRCw4QkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0T3B0aW9ucywgS2FsdHVyYVJlcXVlc3RPcHRpb25zQXJncyB9IGZyb20gJy4va2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlcXVlc3RCYXNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVxdWVzdEJhc2UgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwcml2YXRlIF9uZXR3b3JrVGFnOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBLYWx0dXJhUmVxdWVzdEJhc2VBcmdzKSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHNldE5ldHdvcmtUYWcodGFnOiBzdHJpbmcpOiB0aGlzIHtcbiAgICAgICAgaWYgKCF0YWcgfHwgdGFnLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYGNhbm5vdCBzZXQgbmV0d29yayB0YWcgbG9uZ2VyIHRoYW4gMTAgY2hhcmFjdGVycy4gaWdub3JpbmcgdGFnICcke3RhZ31gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25ldHdvcmtUYWcgPSB0YWc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXROZXR3b3JrVGFnKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrVGFnO1xuICAgIH1cbn1cblxuIl19
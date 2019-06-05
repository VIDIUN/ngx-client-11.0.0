/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaEventObjectChangedConditionArgs() { }
/** @type {?|undefined} */
KalturaEventObjectChangedConditionArgs.prototype.modifiedColumns;
var KalturaEventObjectChangedCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEventObjectChangedCondition, _super);
    function KalturaEventObjectChangedCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEventObjectChangedCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEventObjectChangedCondition' },
            modifiedColumns: { type: 's' }
        });
        return result;
    };
    return KalturaEventObjectChangedCondition;
}(KalturaCondition));
export { KalturaEventObjectChangedCondition };
if (false) {
    /** @type {?} */
    KalturaEventObjectChangedCondition.prototype.modifiedColumns;
}
typesMappingStorage['KalturaEventObjectChangedCondition'] = KalturaEventObjectChangedCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPNUUsSUFBQTtJQUF3RCw4REFBZ0I7SUFJcEUsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkNBN0JMO0VBU3dELGdCQUFnQixFQXFCdkUsQ0FBQTtBQXJCRCw4Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbkFyZ3Mge1xuICAgIG1vZGlmaWVkQ29sdW1ucz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFdmVudE9iamVjdENoYW5nZWRDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIG1vZGlmaWVkQ29sdW1ucyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXZlbnRPYmplY3RDaGFuZ2VkQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRtb2RpZmllZENvbHVtbnMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbiddID0gS2FsdHVyYUV2ZW50T2JqZWN0Q2hhbmdlZENvbmRpdGlvbjsiXX0=
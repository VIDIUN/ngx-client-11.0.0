/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringValue } from './KalturaStringValue';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaAuthenticatedConditionArgs() { }
/** @type {?|undefined} */
KalturaAuthenticatedConditionArgs.prototype.privileges;
export class KalturaAuthenticatedCondition extends KalturaCondition {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.privileges === 'undefined')
            this.privileges = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuthenticatedCondition' },
            privileges: { type: 'a', subTypeConstructor: KalturaStringValue, subType: 'KalturaStringValue' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAuthenticatedCondition.prototype.privileges;
}
typesMappingStorage['KalturaAuthenticatedCondition'] = KalturaAuthenticatedCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1dGhlbnRpY2F0ZWRDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBdXRoZW50aWNhdGVkQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBTzVFLE1BQU0sb0NBQXFDLFNBQVEsZ0JBQWdCOzs7O0lBSS9ELFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3BFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUMzRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nVmFsdWUgfSBmcm9tICcuL0thbHR1cmFTdHJpbmdWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUF1dGhlbnRpY2F0ZWRDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFDb25kaXRpb25BcmdzIHtcbiAgICBwcml2aWxlZ2VzPyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXV0aGVudGljYXRlZENvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFDb25kaXRpb24ge1xuXG4gICAgcHJpdmlsZWdlcyA6IEthbHR1cmFTdHJpbmdWYWx1ZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXV0aGVudGljYXRlZENvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByaXZpbGVnZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnByaXZpbGVnZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQXV0aGVudGljYXRlZENvbmRpdGlvbicgfSxcblx0XHRcdFx0cHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZ1ZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFTdHJpbmdWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF1dGhlbnRpY2F0ZWRDb25kaXRpb24nXSA9IEthbHR1cmFBdXRoZW50aWNhdGVkQ29uZGl0aW9uOyJdfQ==
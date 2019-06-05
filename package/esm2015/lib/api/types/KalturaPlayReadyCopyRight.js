/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyCopyEnablerHolder } from './KalturaPlayReadyCopyEnablerHolder';
import { KalturaPlayReadyRight } from './KalturaPlayReadyRight';
/**
 * @record
 */
export function KalturaPlayReadyCopyRightArgs() { }
/** @type {?|undefined} */
KalturaPlayReadyCopyRightArgs.prototype.copyCount;
/** @type {?|undefined} */
KalturaPlayReadyCopyRightArgs.prototype.copyEnablers;
export class KalturaPlayReadyCopyRight extends KalturaPlayReadyRight {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.copyEnablers === 'undefined')
            this.copyEnablers = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlayReadyCopyRight' },
            copyCount: { type: 'n' },
            copyEnablers: { type: 'a', subTypeConstructor: KalturaPlayReadyCopyEnablerHolder, subType: 'KalturaPlayReadyCopyEnablerHolder' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayReadyCopyRight.prototype.copyCount;
    /** @type {?} */
    KalturaPlayReadyCopyRight.prototype.copyEnablers;
}
typesMappingStorage['KalturaPlayReadyCopyRight'] = KalturaPlayReadyCopyRight;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLE1BQU0sZ0NBQWlDLFNBQVEscUJBQXFCOzs7O0lBS2hFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0tBQ3hFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzNILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXInO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlSZWFkeVJpZ2h0LCBLYWx0dXJhUGxheVJlYWR5UmlnaHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUGxheVJlYWR5UmlnaHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQbGF5UmVhZHlDb3B5UmlnaHRBcmdzICBleHRlbmRzIEthbHR1cmFQbGF5UmVhZHlSaWdodEFyZ3Mge1xuICAgIGNvcHlDb3VudD8gOiBudW1iZXI7XG5cdGNvcHlFbmFibGVycz8gOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlSZWFkeUNvcHlSaWdodCBleHRlbmRzIEthbHR1cmFQbGF5UmVhZHlSaWdodCB7XG5cbiAgICBjb3B5Q291bnQgOiBudW1iZXI7XG5cdGNvcHlFbmFibGVycyA6IEthbHR1cmFQbGF5UmVhZHlDb3B5RW5hYmxlckhvbGRlcltdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29weUVuYWJsZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5jb3B5RW5hYmxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0JyB9LFxuXHRcdFx0XHRjb3B5Q291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29weUVuYWJsZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheVJlYWR5Q29weUVuYWJsZXJIb2xkZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlSZWFkeUNvcHlFbmFibGVySG9sZGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0J10gPSBLYWx0dXJhUGxheVJlYWR5Q29weVJpZ2h0OyJdfQ==